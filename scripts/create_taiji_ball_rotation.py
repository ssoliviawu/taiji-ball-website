import bpy
import os
import sys

# Clear existing scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Set scene properties
scene = bpy.context.scene
scene.render.resolution_x = 1920
scene.render.resolution_y = 1080
scene.render.resolution_percentage = 100
scene.render.fps = 24
scene.render.fps_base = 1

# Create UV sphere for taiji ball
bpy.ops.mesh.primitive_uv_sphere_add(radius=2, location=(0, 0, 0))
ball = bpy.context.active_object
ball.name = "TaijiBall"

# Add subdivision surface modifier for smoother appearance
subsurf_mod = ball.modifiers.new(name="Subsurf", type='SUBSURF')
subsurf_mod.levels = 2
subsurf_mod.render_levels = 3

# Create material with image texture
mat = bpy.data.materials.new(name="TaijiMaterial")
mat.use_nodes = True
nodes = mat.node_tree.nodes

# Clear default nodes
nodes.clear()

# Create texture coordinate node
tex_coord = nodes.new('ShaderNodeTexCoord')

# Create mapping node for proper texture orientation
mapping_node = nodes.new('ShaderNodeMapping')

# Create texture node
texture_node = nodes.new('ShaderNodeTexImage')

# Use the first taiji ball image
image_path = r"C:\Users\DELL\taiji-ball-website\public\images\processed\太极球1_nobg.png"

# Load image
try:
    if os.path.exists(image_path):
        img = bpy.data.images.load(image_path)
        texture_node.image = img
    else:
        raise FileNotFoundError(f"Image not found: {image_path}")
except Exception as e:
    print(f"Could not load image: {e}")
    # Create a procedural taiji pattern texture
    img = bpy.data.images.new('taiji_pattern', width=1024, height=1024)
    pixels = []
    for y in range(1024):
        for x in range(1024):
            dist_from_center = ((x-512)**2 + (y-512)**2) ** 0.5
            if dist_from_center < 400:
                # Create a basic yin-yang pattern
                angle = (y - 512) * 0.01
                if ((x < 512) ^ (y < 512)):
                    pixels.extend([0.1, 0.1, 0.1, 1])
                else:
                    pixels.extend([0.9, 0.9, 0.9, 1])
            else:
                pixels.extend([0, 0, 0, 0])
    img.pixels = pixels
    texture_node.image = img

# Create principled BSDF node
bsdf_node = nodes.new('ShaderNodeBsdfPrincipled')
bsdf_node.inputs['Base Color'].default_value = (1, 1, 1, 1)

# Create output node
output_node = nodes.new('ShaderNodeOutputMaterial')

# Link nodes
links = mat.node_tree.links
links.new(tex_coord.outputs['Generated'], mapping_node.inputs['Vector'])
links.new(mapping_node.outputs['Vector'], texture_node.inputs['Vector'])
links.new(texture_node.outputs['Color'], bsdf_node.inputs['Base Color'])
links.new(bsdf_node.outputs['BSDF'], output_node.inputs['Surface'])

# Assign material to ball
if ball.data.materials:
    ball.data.materials[0] = mat
else:
    ball.data.materials.append(mat)

# Setup camera
bpy.ops.object.camera_add(location=(6, -6, 0))
camera = bpy.context.active_object
camera.rotation_euler = (1.5708, 0, 0.7854)  # 90 degrees, 45 degrees
scene.camera = camera

# Add lighting
bpy.ops.object.light_add(type='SUN', location=(5, 5, 10))
light = bpy.context.active_object
light.data.energy = 5

# Setup rotation animation - 360 degrees over 5 seconds
ball.rotation_euler = (0, 0, 0)
frame_start = 1
frame_end = 120  # 5 seconds at 24 fps

# Insert keyframes for rotation around Y axis (for best viewing angle)
ball.keyframe_insert(data_path='rotation_euler', frame=frame_start)
ball.rotation_euler = (0, 6.28318, 0)  # 360 degrees around Y axis
ball.keyframe_insert(data_path='rotation_euler', frame=frame_end)

# Set animation properties
scene.frame_start = frame_start
scene.frame_end = frame_end

# Setup rendering
scene.render.engine = 'CYCLES'
scene.cycles.samples = 64

# For Blender 5.1, use PNG sequence
scene.render.image_settings.file_format = 'PNG'

# Output path
output_dir = r"C:\Users\DELL\taiji-ball-website\public\videos"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "taiji_ball_rotation_")
scene.render.filepath = output_path

# Render animation
print(f"Starting render to: {output_path}")
print("Rendering 360 degree rotation animation...")
bpy.ops.render.render(animation=True)

print("Render complete!")