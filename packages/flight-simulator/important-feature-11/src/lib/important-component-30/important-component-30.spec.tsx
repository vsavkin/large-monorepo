import { render } from '@testing-library/react';

import ImportantComponent30 from './important-component-30';

describe('ImportantComponent30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent30 />);
    expect(baseElement).toBeTruthy();
  });
});
