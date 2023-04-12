import { BackLog } from "../entities/backlog";

export interface SaveBacklog {
  save: (backlog: BackLog.BackLogContent) => Promise<BackLog.BackLogContent>;
}
