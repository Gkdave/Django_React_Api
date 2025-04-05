from django.db import models

# Create your models here.

class Employee(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=254)
    emp_id=models.IntegerField()
    phone=models.BigIntegerField()
    address=models.TextField()
    def __str__(self):
        return self.name + self.email 
    
