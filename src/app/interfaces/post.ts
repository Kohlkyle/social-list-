export interface Post {
  title: string
  thought: string
}

// 1.create output decorator in child TS
// 2.create method/event emitter in child TS
// 3.add listener/method to child HTML
// 4.create function in parent TS
// 5.reference event (from child) in parent HTML
// 6.reference function from parent TS in Parent HTML

// ($event) comes from the info in emit event
