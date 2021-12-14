import { render } from '@testing-library/react';

import Alert72 from './alert72';

describe('Alert72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert72 />);
    expect(baseElement).toBeTruthy();
  });
});
