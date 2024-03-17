export function moveCursorToSecondWord(event) {
    const inputValue = event.target.value;
    const words = inputValue.split(' ');
    if (words.length >= 2) {
        const firstSpaceIndex = inputValue.indexOf(' ');
        const secondSpaceIndex = inputValue.indexOf(' ', firstSpaceIndex + 1);

        if (secondSpaceIndex !== -1) {
            const caretPosition = secondSpaceIndex; // Set caret position to the end of the second word
            const inputElement = event.target;
            inputElement.setSelectionRange(caretPosition, caretPosition);
        }
    }
}
