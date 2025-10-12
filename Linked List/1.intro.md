what is a data structure?
A data structure is a way of organizing, storing, and managing data in a computer to enable efficient access and manipulation for specific programming tasks

A linked list is a fundamental data structure that stores a collection of items in a linear sequence. Unlike arrays, linked list elements are not stored at contiguous memory locations; instead, the elements are linked using pointers.

A linked list consists of a chain of nodes. Each node is a small container with two main components:

**Data**: The actual value you want to store (e.g., a number, a string, an object).

**Pointer** (or Link): A reference that points to the next node in the sequence. The last node's pointer is typically set to NULL to signify the end of the list.

The entry point to a linked list is a special pointer called the **head**, which points to the very first node.

![linked list](https://media.geeksforgeeks.org/wp-content/uploads/20220829110944/LLdrawio.png)

we have 2 types of linked list

**Singly Linked List**

- Structure: Each node contains a data element and a single pointer (or link) to the next node in the sequence.
- Traversal: You can only move forward through the list, from one node to the next.
- Memory Usage: Consumes less memory per node compared to a doubly linked list because it only stores one pointer.
- Use Cases: Good for applications where you only need to process elements in one direction, such as implementing an undo feature in a text editor.
  **Doubly Linked List**
- Structure: Each node contains three fields: a data element, a pointer to the previous node, and a pointer to the next node.
- Traversal: You can traverse the list in both directions (forward and backward).
  Memory Usage: Uses more memory per node due to the extra pointer for the previous node.
- Advantages: Supports efficient operations like inserting or deleting nodes from both ends and allows for easier traversal and management.
- Use Cases: Beneficial for data structures like Deques (Double-Ended Queues) that require efficient access and modification at both ends of the list.

![double linked list](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/03/DLL1.png)

linked List vs Array

| Feature / Property       | **Linked List**                                                                    | **Array**                                 |
| ------------------------ | ---------------------------------------------------------------------------------- | ----------------------------------------- |
| **Structure Type**       | Linear                                                                             | Linear                                    |
| **Memory Allocation**    | Contiguous                                                                         | Non-contiguous                            |
| **Size**                 | Always dynamic                                                                     | Fixed size (can be dynamic in some cases) |
| **Storage Unit**         | Node = Value + Pointers                                                            | Just Value                                |
| **Element Fetching**     | Hard — O(n)                                                                        | Easy — O(1)                               |
| **Insertion / Deletion** | Easy                                                                               | Complex                                   |
| **Memory Usage**         | Extra memory required (stores value + pointer → ≈ 2x; for doubly linked list ≈ 3x) | Memory efficient (only stores value)      |

### Explanation

**Why fetching an element is hard (Linked List vs Array):**  
In an array, elements are stored in contiguous memory locations, so you can directly access any element using its index in O(1) time.  
In a linked list, elements are stored at random memory locations and connected by pointers. To access a particular element, you must traverse the list node by node from the head, making it O(n) time complexity.

**Why insertion/deletion is easy (Linked List vs Array):**  
In an array, inserting or deleting an element requires shifting the subsequent elements, which takes O(n) time.  
In a linked list, you can insert or delete a node by simply updating a few pointers without shifting other elements, making it O(1) in the best case.

To insert a new element in linked list we only has to create a new node and change the pointers
![linked list insertion](https://media.geeksforgeeks.org/wp-content/uploads/20200822122044/ibhll.jpg)

but if you want insert an element in middle of array you have to shift all elements which will take time complexity of O(n) then you have to insert

**Why memory is more efficient in arrays:**  
Arrays only store data values, so they use memory efficiently.  
Linked lists require additional memory to store pointers (one or two depending on whether it’s singly or doubly linked), making them less memory-efficient.
