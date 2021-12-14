import { render } from '@testing-library/react';

import ImportantComponent9 from './important-component-9';

describe('ImportantComponent9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent9 />);
    expect(baseElement).toBeTruthy();
  });
});
