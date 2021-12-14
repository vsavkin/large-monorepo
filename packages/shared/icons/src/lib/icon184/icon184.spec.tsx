import { render } from '@testing-library/react';

import Icon184 from './icon184';

describe('Icon184', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon184 />);
    expect(baseElement).toBeTruthy();
  });
});
