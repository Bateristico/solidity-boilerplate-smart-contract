pragma solidity ^0.4.17;
// SPDX-License-Identifier: GPL-3.0-or-later
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

contract Inbox {
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}