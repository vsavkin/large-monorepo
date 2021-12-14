import { render } from '@testing-library/react';

import Dialog140 from './dialog140';

describe('Dialog140', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog140 />);
    expect(baseElement).toBeTruthy();
  });
});
