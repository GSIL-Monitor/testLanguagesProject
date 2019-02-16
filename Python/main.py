#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date    : 2019-02-16 13:59:25
# @Author  : NieLamu
# @Email  : mxmxlty@gmail.com
# @Link    : https://github.com/NieLamu
# @File    : main.py
# @Description : init


import os
import traceback


from serviceErrorNotify import serviceErrorNotify


def x():
	print(1/0)


def y():
	x()


def z():
	y()








if __name__ == "__main__":
	try:
		z()
	except Exception as e:
		serviceErrorNotify.notify(traceback.format_exc())

	pass
