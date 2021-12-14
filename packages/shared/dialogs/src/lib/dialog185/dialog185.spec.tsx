import { render } from '@testing-library/react';

import Dialog185 from './dialog185';

describe('Dialog185', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog185 />);
    expect(baseElement).toBeTruthy();
  });
});
