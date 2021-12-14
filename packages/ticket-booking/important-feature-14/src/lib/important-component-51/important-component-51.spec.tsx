import { render } from '@testing-library/react';

import ImportantComponent51 from './important-component-51';

describe('ImportantComponent51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent51 />);
    expect(baseElement).toBeTruthy();
  });
});
