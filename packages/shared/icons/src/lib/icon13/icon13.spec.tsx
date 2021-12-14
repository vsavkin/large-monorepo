import { render } from '@testing-library/react';

import Icon13 from './icon13';

describe('Icon13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon13 />);
    expect(baseElement).toBeTruthy();
  });
});
