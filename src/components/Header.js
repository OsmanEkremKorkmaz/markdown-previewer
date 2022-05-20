import React from 'react'
import { useDispatch } from 'react-redux'
import { setMarkdownText } from '../redux/markdown'

const example = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.`

function Header() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setMarkdownText(example))
  }
  return (
    <header>
      <h1>Markdown Preview</h1>
      <button onClick={() => handleClick()}>?</button>
    </header>
  )
}

export default Header