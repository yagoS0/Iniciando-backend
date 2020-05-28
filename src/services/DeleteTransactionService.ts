import { getCustomRepository } from 'typeorm';
import Transactionrepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

interface Request {
  id: 'uuid()';
}

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(Transactionrepository);
    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
