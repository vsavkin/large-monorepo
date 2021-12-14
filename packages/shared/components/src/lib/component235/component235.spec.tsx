import { render } from '@testing-library/react';

import Component235 from './component235';

describe('Component235', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component235 />);
    expect(baseElement).toBeTruthy();
  });
});
