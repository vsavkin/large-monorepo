import { render } from '@testing-library/react';

import Alert144 from './alert144';

describe('Alert144', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert144 />);
    expect(baseElement).toBeTruthy();
  });
});
