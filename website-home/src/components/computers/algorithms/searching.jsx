import ContentPage from "../../content/content-page";
import MathTextInline from "../../latex/math-text-inline";
import { CodeView } from "@cloudscape-design/code-view";
import javascriptHighlight from "@cloudscape-design/code-view/highlight/javascript";

const Searching = () => {

  const basicContent = (
    <div>
      <ol>
        <li>
          Searching is the operation of finding a value in a sequence of values.
        </li>
        <li>
          Arrays and lists are the 2 basic ways of storing sequences.
          <ol>
            <li>
              Array is stored in continuous block of memory. It has fixed size.
            </li>
            <li>
              Linked list is scattered in the memory. It has flexible size.
            </li>
          </ol>
        </li>
        <li>
          Linear search and binary search are the 2 basic ways of searching sequences.
        </li>
        <li>
          Linear search
          <ol>
            <li>
              Linear search scans the sequence until the value is found or the sequence is over.
            </li>
            <li>
              Linear search works for both arrays and linked lists.
            </li>
            <li>
              Linear search takes O(n) time and O(1) space.
            </li>
          </ol>
        </li>
        <li>Binary search</li>
        <ol>
          <li>
            Binary search recursively looks at the middle element
            and reduces the search interval by half in each step
          </li>
          <li>
            Binary search works for sorted arrays.
          </li>
          <li>
            Binary search takes <MathTextInline>O(log_2n)</MathTextInline> time and O(1) space.
          </li>
        </ol>
      </ol>
      <b>Linear Search Pseudocode</b>
      <CodeView
        lineNumbers
        wrapLines
        highlight={javascriptHighlight}
        content={`// Array A, length n
// Value to find k

function linear_search(A, k) {
  index = 0;

  while (index < n and A[i] != k) {
    index = index + 1
  }

  if (index < n) {
    return index // value found
  } else {
    return -1  // value not found
  }
}
  `}
      />
      <br/>
      <b>Binary Search Pseudocode</b>
      <CodeView
        wrapLines
        lineNumbers
        highlight={javascriptHighlight}
        content={`// Sorted array A (ascending order), length n
// Value to find k
// Searches value in A from index left to index right - 1

function binary_search(A, k, left, right) {
  if (right - left == 0){
    return -1; // value not found
  }
  
  middle = int((left + right) / 2);
  
  if (k == A[middle]) {
    return middle; // value found
  }

  if (k < A[middle]) {
    return binary_search(A, k, left, middle)
  }
  else {
    return binary_search(A, k, middle + 1, right)  
  }
}
  `}
      />
    </div>
  );

  const advancedContent = (
    <div>
      Searching is the operation of finding a value in a sequence of values.
      Arrays and lists are the 2 basic ways of storing sequence of values
      in a computer.

      <br />
      An <b>array</b> is a continuous block of memory.
    </div>
  );

  const exampleContent = (
    <div>

    </div>
  );

  return (
    <div>
      <ContentPage
        basicContent={basicContent}
        advancedContent={advancedContent}
        examplesContent={exampleContent}
        title={"Searching"}
      />
    </div>
  );
}

export default Searching;
