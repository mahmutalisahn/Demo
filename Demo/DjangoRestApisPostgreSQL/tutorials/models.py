from django.db import models


class Tutorial(models.Model):
    brand = models.CharField(max_length=70, blank=False, default='')
    model = models.CharField(max_length=200,blank=False, default='')
    weight = models.IntegerField(blank=False)
    category = models.CharField(max_length=70, blank=False, default='')
