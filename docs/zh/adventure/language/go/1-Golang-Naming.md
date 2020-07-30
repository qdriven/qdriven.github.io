# Golang 命名规范

[golang package names](https://blog.golang.org/package-names)

总结Golang Package的命名规范如下:
1. package 名字都为小写
2. 文件名称和文件的内容一定要一致
3. 函数名称如果是New，那么一定返回一个这个package的类型的对象
```sh
q :=list.New()  //q is a *list.List
```
4. type在不同的包可以名称一样
5. 不良的命名，比如util，common，misc等等，给用户没有提供任何信息