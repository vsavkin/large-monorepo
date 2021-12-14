import { render } from '@testing-library/react';

import ImportantComponent141 from './important-component-141';

describe('ImportantComponent141', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent141 />);
    expect(baseElement).toBeTruthy();
  });
});
