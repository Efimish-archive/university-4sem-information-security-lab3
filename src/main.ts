import { generateBigPrime, generateRandomBigInt, modExp, primitiveRootModulo } from "./utils";

const get_p_button = document.getElementById('get-p') as HTMLButtonElement;
const get_g_button = document.getElementById('get-g') as HTMLButtonElement;
const get_a_button = document.getElementById('get-a') as HTMLButtonElement;
const get_b_button = document.getElementById('get-b') as HTMLButtonElement;
const get_A_button = document.getElementById('get-A') as HTMLButtonElement;
const get_B_button = document.getElementById('get-B') as HTMLButtonElement;
const get_alice_button = document.getElementById('get-alice') as HTMLButtonElement;
const get_bob_button = document.getElementById('get-bob') as HTMLButtonElement;

const p_element = document.getElementById('p') as HTMLInputElement;
const g_element = document.getElementById('g') as HTMLInputElement;
const a_element = document.getElementById('a') as HTMLInputElement;
const b_element = document.getElementById('b') as HTMLInputElement;
const A_element = document.getElementById('A') as HTMLInputElement;
const B_element = document.getElementById('B') as HTMLInputElement;
const alice_element = document.getElementById('alice') as HTMLInputElement;
const bob_element = document.getElementById('bob') as HTMLInputElement;

get_p_button.onclick = () => {
  const p = generateBigPrime(58);
  p_element.value = p.toString();
}

get_g_button.onclick = async () => {
  const p = BigInt(p_element.value);
  const g = await primitiveRootModulo(p);
  g_element.value = g!.toString();
}

get_a_button.onclick = () => {
  const a = generateRandomBigInt(24);
  a_element.value = a.toString();
}

get_b_button.onclick = () => {
  const b = generateRandomBigInt(24);
  b_element.value = b.toString();
}

get_A_button.onclick = () => {
  const g = BigInt(g_element.value);
  const a = BigInt(a_element.value);
  const p = BigInt(p_element.value);

  const A = modExp(g, a, p);
  A_element.value = A.toString();
}

get_B_button.onclick = () => {
  const g = BigInt(g_element.value);
  const b = BigInt(b_element.value);
  const p = BigInt(p_element.value);

  const B = modExp(g, b, p);
  B_element.value = B.toString();
}

get_alice_button.onclick = () => {
  const B = BigInt(B_element.value);
  const a = BigInt(a_element.value);
  const p = BigInt(p_element.value);

  const aliceNum = modExp(B, a, p);
  // const aliceNum2 = modExp(g, a * b, p);
  alice_element.value = aliceNum.toString();
}

get_bob_button.onclick = () => {
  const A = BigInt(A_element.value);
  const b = BigInt(b_element.value);
  const p = BigInt(p_element.value);

  const bobNum = modExp(A, b, p);
  // const bobNum2 = modExp(g, a * b, p);
  bob_element.value = bobNum.toString();
}
