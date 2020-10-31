from django.shortcuts import render
from .models import Post

posts = [
    {
        'author': 'CoreyMS',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'August 27, 2018'
    },
    {
        'author': 'Jane Doe',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'August 28, 2018'
    }
]


def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/home.html', context)


def about(request):
    return render(request, 'blog/about.html', {'title': 'About'})

def menu(request):
    return render(request, 'blog/index.html', {'title': 'Menu'})

def stafflog(request):
    return render(request, 'users/stafflog.html', {'title': 'Staff Login'})

def sale(request):
    return render(request, 'users/sale.html', {'title': 'Sale'})




