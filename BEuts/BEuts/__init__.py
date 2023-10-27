from pyramid.config import Configurator
from sqlalchemy import create_engine
from .models.mymodels import Base, DBSession

def main(global_config, **settings):
    engine = create_engine(settings['sqlalchemy.url'])
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine

    config = Configurator(settings=settings)
    config.include('pyramid_jinja2')
    config.add_static_view(name='static', path='BeUts:static')
    config.add_route('home', '/')
    config.add_route('add_product', '/add_product')
    config.scan()
    return config.make_wsgi_app()
