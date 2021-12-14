import { render } from '@testing-library/react';

import Alert40 from './alert40';

describe('Alert40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert40 />);
    expect(baseElement).toBeTruthy();
  });
});
