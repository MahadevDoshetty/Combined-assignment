// Problem Statement
// Write a function that describes a selected seat position on a flight.

// Use an enum to represent the possible seat positions: Window, Middle, and Aisle.
// The function should take the seat position as input and return a corresponding message.
// If the input is invalid, the function should throw an error.
// Ensure proper type annotations and error handling.

// Example Input:
// SeatPosition.Window

// Example Output:
// "You have selected a window seat."

export enum SeatPosition {
    Window,
    Middle,
    Aisle
}
export function getSeatDescription(input: SeatPosition): string  {
    try {
        if (input == SeatPosition.Window) {
            return "You have selected a window seat."
        }
        if (input == SeatPosition.Middle) {
            return "You have selected a middle seat."
        }
        if (input == SeatPosition.Aisle) {
            return "You have selected a aisle seat."
        }
        return "Invalid seat position"
    } catch (error) {
        return "Invalid seat position"
    }
}