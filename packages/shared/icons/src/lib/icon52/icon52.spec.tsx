import { render } from '@testing-library/react';

import Icon52 from './icon52';

describe('Icon52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon52 />);
    expect(baseElement).toBeTruthy();
  });
});
