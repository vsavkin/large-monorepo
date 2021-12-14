import { render } from '@testing-library/react';

import Alert104 from './alert104';

describe('Alert104', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert104 />);
    expect(baseElement).toBeTruthy();
  });
});
