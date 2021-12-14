import { render } from '@testing-library/react';

import SharedComponents from './shared-components';

describe('SharedComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponents />);
    expect(baseElement).toBeTruthy();
  });
});
