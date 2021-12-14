import { render } from '@testing-library/react';

import Icon129 from './icon129';

describe('Icon129', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon129 />);
    expect(baseElement).toBeTruthy();
  });
});
