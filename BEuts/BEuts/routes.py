from pyramid.view import view_config
from pyramid.response import Response

@view_config(route_name='home', renderer='templates/home.jinja2')
def home(request):
    products = DBSession.query(Product).all()
    return {'products': products}

@view_config(route_name='add_product', request_method='POST', renderer='json')
def add_product(request):
    try:
        schema = ProductSchema()
        data = schema.deserialize(request.json_body)
        product = Product(name=data['name'], price=data['price'])
        DBSession.add(product)
        DBSession.flush()
        return {'status': 'success', 'message': 'Product added successfully'}
    except colander.Invalid as e:
        return {'status': 'error', 'errors': e.asdict()}
