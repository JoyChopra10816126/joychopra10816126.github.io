import { CodeView } from "@cloudscape-design/code-view";
import ContentPage from "../../content/content-page";
import MathTextInline from "../../latex/math-text-inline";
import javascriptHighlight from "@cloudscape-design/code-view/highlight/javascript";

const Sorting = () => {

  const basicContent = (
    <div>
      <ol>
        <li>
          Sorting is useful because it enables binary search which is a faster search algorithm.
        </li>
        <li>
          Other advantages of sorting include
          <ol>
            <li>
              Find median of an array in O(1) time
            </li>
            <li>
              Check for duplicate values in O(n) time
            </li>
            <li>
              Build frequency table in O(n) time
            </li>
            <li>
              Remove duplicate values in O(n) time
            </li>
          </ol>
        </li>
        <li>
          Selection sort is a basic sorting algorithm
          <ol>
            <li>
              We select the smallest element in the list
            </li>
            <li>
              Then we swap it with the first element of the list
            </li>
            <li>
              Then we repeat the procedure with a smaller array from elements 2 to n
            </li>
            <li>
              Selection sort takes <MathTextInline>{"O(n^2)"}</MathTextInline> time
            </li>
            <li>
              Selection sort can be implemented both iteratively and recursively
            </li>
          </ol>
        </li>
        <li>
          Insertion sort is another basic sorting algorithm
          <ol>
            <li>
              We start with a sorted segment of 1 element.
            </li>
            <li>
              Then we take the next unsorted element and insert it in
              the correct position in the sorted segment
            </li>
            <li>
              Then we repeat with the next unsorted element.
            </li>
            <li>
              Insertion sort takes <MathTextInline>{"O(n^2)"}</MathTextInline> time
            </li>
            <li>
              Insertion sort can be implemented both iteratively and recursively
            </li>
          </ol>
        </li>
        <li>
          <MathTextInline>{"O(n^2)"}</MathTextInline> sorting algorithms are
          infeasible for n greater than 10000
        </li>
        <li>
          Experimentally, insertion sort is faster than selection sort.
        </li>
      </ol>
      <b>Selection sort pseudocode</b>
      <CodeView
        wrapLines
        lineNumbers
        highlight={javascriptHighlight}
        content={
          `// Array A of length n
function selection_sort(A, n) {
  // Scan segments
  for (start_index = 0; start_index < n; start_index++) {
    // Find index of minimum value in the segment
    min_index = start_index
    for (inner_index = min_index + 1; inner_index < n; inner_index++) {
      // Update minimum value index
      if(A[inner_index] < A[min_index]) {
        min_index = inner_index
      }
    }
    // Move minimum value to its correct position
    swap(A, start_index, min_index)
  }
}

function swap(A, index1, index2) {
  temp = A[index2]
  A[index2] = A[index1]
  A[index1] = temp
}
          `
        }
      />
      <br/>
      <b>Insertion sort pseudocode</b>
      <CodeView
        wrapLines
        lineNumbers
        highlight={javascriptHighlight}
        content={
          `// Array A of length n
function insertion_sort(A, n) {
  for(index = 1; index < n; index++) {
    // In each iteration, A[0] to A[index - 1] is a sorted segment

    next_index = index
    // Insert new element in its correct position in the sorted segment
    while(next_index > 0 && A[next_index] < A[next_index - 1] ) {
      swap(A, next_index, next_index - 1)
      next_index = next_index - 1
    }
  }
}
          `
        }
      />
    </div>
  );

  return (
    <div>
      <ContentPage
        basicContent={basicContent}
        title={"Sorting"}
      />
    </div>
  );
}

export default Sorting;
