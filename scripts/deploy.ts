import { ethers } from "hardhat";
import { PromiseOrValue } from "../typechain-types/common";

export default async function deploy(
  arbiter: PromiseOrValue<string>,
  beneficiary: PromiseOrValue<string>,
  value: any) {

  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(arbiter, beneficiary, { value });

  return escrow.deployed();
}