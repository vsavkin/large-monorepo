import { render } from '@testing-library/react';

import Component185 from './component185';

describe('Component185', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component185 />);
    expect(baseElement).toBeTruthy();
  });
});
