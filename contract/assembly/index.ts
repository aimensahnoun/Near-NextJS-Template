import { Context } from "near-sdk-as";


//Returns static string
export function helloWorld(): string {
  return `Hello World`;
}

//Returns hello with username
export function helloYou() : string {
  return `Hello ${Context.sender}`;
} 
