from django.shortcuts import render
from django.http import HttpResponse, Http404
from books.models import Books
from .form import BooksForm

# Create your views here.
def home_view(request, *args, **kwargs):
   return HttpResponse("<h1>Hello World!</h1>")

def book_detail_view(request, book_id, *args, **kwargs):
  try:
    obj = Books.objects.get(id=book_id)
  except:
    raise Http404

  #return HttpResponse(f"Title: {obj.name} Author: {obj.author} {obj.description}")
  return render(request, 'components/book.html', context={'name': obj.name, 'author': obj.author, 'description': obj.description})

def book_create_view(request, *args, **kwargs):
  form = BooksForm(request.POST or None)
  if form.is_valid():
    obj = form.save(commit=False)
    obj.save()
    form = BooksForm()
  return render(request, 'components/form.html', context={'form': form})

def book_delete_view(request, book_id, *args, **kwargs):
  Books.objects.filter(id=book_id).delete()
  return HttpResponse(f"That book has been deleted")

def all_book_view(request, *args, **kwargs):
  blist = Books.objects.all()
  #books = [x.serialize() for x in blist]
  print(blist)
  
  return HttpResponse(f"yo yo yiggity yo")