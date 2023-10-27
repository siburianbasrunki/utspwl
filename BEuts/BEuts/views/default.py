from pyramid.view import view_config
from pyramid.response import Response
from Beuts.models.myModel import DBSession, Product

@view_config(route_name='home', renderer='templates/home.pt')
def home_view(request):
    products = DBSession.query(Product).all()
    return {'products': products}

# Tambahkan logika lainnya untuk menangani permintaan dari frontend
