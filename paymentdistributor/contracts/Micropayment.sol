// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Micropayment
 * @dev Interface to enforce a refund method on Escrow
 */
interface Micropayment {
    function refund(address to, uint256 amount) external;
}
