import { render } from '@testing-library/react';

import Dialog236 from './dialog236';

describe('Dialog236', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog236 />);
    expect(baseElement).toBeTruthy();
  });
});
