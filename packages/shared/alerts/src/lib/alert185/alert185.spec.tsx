import { render } from '@testing-library/react';

import Alert185 from './alert185';

describe('Alert185', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert185 />);
    expect(baseElement).toBeTruthy();
  });
});
