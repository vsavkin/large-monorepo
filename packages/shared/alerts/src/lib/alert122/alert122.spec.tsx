import { render } from '@testing-library/react';

import Alert122 from './alert122';

describe('Alert122', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert122 />);
    expect(baseElement).toBeTruthy();
  });
});
