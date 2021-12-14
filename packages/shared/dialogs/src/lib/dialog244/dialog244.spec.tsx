import { render } from '@testing-library/react';

import Dialog244 from './dialog244';

describe('Dialog244', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog244 />);
    expect(baseElement).toBeTruthy();
  });
});
