import colander

class ProductSchema(colander.MappingSchema):
    name = colander.SchemaNode(colander.String())
    price = colander.SchemaNode(colander.Int())
