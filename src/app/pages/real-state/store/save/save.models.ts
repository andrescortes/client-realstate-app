import { RealState } from 'src/app/models/backend/real-state';

export { RealState as RealStateResponse } from 'src/app/models/backend/real-state';

export type RealStateCreateRequest = Omit<RealState, 'id' | 'createDate'>;
