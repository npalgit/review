package main

import "fmt"

func main() {
	foo()
	bar()
}

func foo() {
	for i := 0; i < 20; i++ {
		fmt.Println("Foo:", i)
	}
}

func bar() {
	for i := 0; i < 20; i++ {
		fmt.Println("Bar:", i)
	}
}
