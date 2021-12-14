import { render } from '@testing-library/react';

import Icon177 from './icon177';

describe('Icon177', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon177 />);
    expect(baseElement).toBeTruthy();
  });
});
