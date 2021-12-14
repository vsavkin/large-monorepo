import { render } from '@testing-library/react';

import Dialog205 from './dialog205';

describe('Dialog205', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog205 />);
    expect(baseElement).toBeTruthy();
  });
});
