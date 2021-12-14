import { render } from '@testing-library/react';

import Alert106 from './alert106';

describe('Alert106', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert106 />);
    expect(baseElement).toBeTruthy();
  });
});
