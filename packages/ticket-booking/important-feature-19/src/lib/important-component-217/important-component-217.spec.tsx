import { render } from '@testing-library/react';

import ImportantComponent217 from './important-component-217';

describe('ImportantComponent217', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent217 />);
    expect(baseElement).toBeTruthy();
  });
});
